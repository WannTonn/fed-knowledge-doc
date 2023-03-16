import { Empty, Select, SelectProps, Spin } from 'antd';
import { debounce } from 'lodash';
import React, { useMemo, useState } from 'react';
/**
 * @description
 */
interface IDebounceSelector extends SelectProps {
  /**  */
  fetchOptions: (search: string) => Promise<[]>;
  /**  */
  debounceTime?: number;
  /**  */
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
    /* if (isTyping) {
      return;
    } */
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
  const handleFocus = async () =>
    ((!options?.length && !alwaysfetch) || alwaysfetch) && debounceFetcher?.();
  return (
    <Select
      style={{ width: '100%' }}
      filterOption={false}
      onSearch={debounceFetcher}
      onFocus={handleFocus}
      showSearch={true}
      notFoundContent={
        fetchLoading ? <Spin /> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      }
      {...props}
      options={options}
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
    <>
      <Selector
        fetchOptions={handleGetData}
        returnValueType={{ label: 'username', value: 'id' }}
        alwaysfetch={false}
        placeholder="请输入关键词"
      />
    </>
  );
};
export default DebounceSelector;
