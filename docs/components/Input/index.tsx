import React, {useState, CompositionEvent, useMemo} from 'react';
import { Input, InputProps } from 'antd';
import { debounce } from 'lodash';
/**
 * @description 
 */
interface IProps extends Omit<InputProps, 'onChange'> {
  onChange?: (value: string) => void;
  debounceTime?: number;
}
const CustomInput = (props: IProps) => {
  const { onChange, debounceTime = 300 } = props;
  // const [isComposing, setIsComposing] = useState(false);
  // 判断是否是Chrome浏览器
  const isChrome = navigator.userAgent.includes('WebKit');


  const handleCompositionStart = () => {
    // setIsComposing(true);
  }
  const handleCompositionEnd = (event: CompositionEvent<HTMLInputElement>) => {
    // setIsComposing(false);
    // Chrome浏览器的onChange事件优先于compositionend
    if (isChrome) {
      onChange?.(event.currentTarget.value);
    }
  }
  const handleValChange = (event) => {
    
    const rawVal = event?.target?.value;
    // 用判断是否在中文输入
    const isComposing = event?.nativeEvent?.isComposing;
    if (!isComposing) {
      onChange?.(rawVal);
    }
  }
  const debounceInput = useMemo(() => {
    return debounce(handleValChange, debounceTime);
  }, [onChange, debounceTime]);
  return (
      <Input
        placeholder='请输入关键词'
        {...props}
        onChange={debounceInput}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
      />
  )
}
const InputWithDebounce = () => {
  const [showText, setShowText] = useState('');
  const handleValChange = (text: string) => {
    setShowText(text);
  }
  return (<div>
    <CustomInput onChange={handleValChange} />
    <h3>当前输入文案：{showText}</h3>
  </div>)
}
export default InputWithDebounce;