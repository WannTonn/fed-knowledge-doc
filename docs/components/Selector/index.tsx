import { Empty, Select, SelectProps, Spin } from 'antd';
import { debounce } from 'lodash';
import React, { useMemo, useState } from 'react';
/**
 * @description 带防抖的Selector
 */
interface IDebounceSelector extends SelectProps {
  /** 配置onSearch触发请求的方法 */
  fetchOptions: (search: string) => Promise<[]>;
  /** 防抖的时间配置，默认300ms */
  debounceTime?: number;
  /** 为确保可以正常显示，配置从数据源中能取到的 label/value的字段。 */
  returnValueType?: { label: string; value: any };
  /** 是否开启在selector focus的时候请求列表数据，减少请求 */
  alwaysfetch?: boolean;
}
const Selector = (props: IDebounceSelector) => {
  const [fetchLoading, setFetchLoading] = useState(false);
  const [options, setOptions] = useState<any[]>([]);
  // const [isTyping, setIsTyping] = useState(false);
  let {
    fetchOptions,
    debounceTime = 300,
    returnValueType,
    alwaysfetch,
  } = props;
  const debounceFetcher = useMemo(() => {
    const loadOptions = (keyword: string = '') => {
      setOptions([]);
      setFetchLoading(true);
      fetchOptions(keyword)
        .then((newOptions: any[] = []) => {
          let newOptions_ = newOptions?.map((e) => {
            return {
              label: e[returnValueType ? returnValueType['label'] : 'name'],
              value: e[returnValueType ? returnValueType['value'] : 'value'],
            };
          });
          setOptions(newOptions_);
          setFetchLoading(false);
        })
        .finally(() => {
          setFetchLoading(false);
        });
    };
    return debounce(loadOptions, debounceTime);
  }, [fetchOptions, debounceTime]);
  /** 在Selector组件点击时，通过传入的alwaysfetch来判断是否要重新请求 */
  const handleFocus = async () =>
    ((!options?.length && !alwaysfetch) || alwaysfetch) && debounceFetcher?.();
  return (
    <Select
      style={{ width: '100%' }}
      filterOption={false}
      showSearch={true}
      onSearch={debounceFetcher}
      onFocus={handleFocus}
      notFoundContent={
        fetchLoading ? <Spin /> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      }
      options={options}
      {...props}
    />
  );
};

/** 使用Selector */
const DebounceSelector = () => {
  const handleGetData = async (keyword: string) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users${
        keyword?.trim()?.length ? `?username=${keyword}` : ''
      }`,
    );
    const data = res.json();
    return data;
  };
  return (
    <Selector
      fetchOptions={handleGetData}
      returnValueType={{ label: 'username', value: 'id' }}
      alwaysfetch={false}
      placeholder="请选择"
    />
  );
};
export default DebounceSelector;
