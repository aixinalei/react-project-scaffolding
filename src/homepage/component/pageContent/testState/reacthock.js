import React ,{useState,useEffect} from 'react';

export default function TestReactHock(){
const [count,setCount] = useState('1');
useEffect(()=>{
    console.log('纯组件state初始值', count)
    setCount(2)
    console.log('纯组件第一个state', count)
    setTimeout(() => {
        console.log('纯组件第二个state', count);
        setCount(3)
        console.log('纯组件第三个state', count);
        setCount(4)
        console.log('纯组件第四个state', count);
    }, 0)
    setTimeout(() => {
        console.log('纯组件第五个state', count);
        setCount(5)
        console.log('纯组件第六个state', count);
        setCount(6)
        console.log('纯组件第七个state', count);
    }, 0)
    setCount( 7)
    console.log('纯组件第八个setState', count);
},[])
console.log('纯组件渲染',count);
    return (
        <div>
            最终的结果是{count}
            <div>源码：</div>
            <div>
                {
                                `const [count,setCount] = useState('0');
                                useEffect(()=>{
                                    console.log('纯组件state初始值', count)
                                    setCount(2)
                                    console.log('纯组件第一个state', count)
                                    setTimeout(() => {
                                        console.log('纯组件第二个state', count);
                                        setCount(3)
                                        console.log('纯组件第三个state', count);
                                        setCount(4)
                                        console.log('纯组件第四个state', count);
                                    }, 0)
                                    setTimeout(() => {
                                        console.log('纯组件第五个state', count); 
                                        setCount(5)
                                        console.log('纯组件第六个state', count);
                                        setCount(6)
                                        console.log('纯组件第七个state', count);
                                    }, 0)
                                    setCount( 7)
                                    console.log('纯组件第八个setState', count);
                                },[])`
                }
            </div>
            <div>打印：</div>
            <div>
            纯组件渲染<br/>
            纯组件state初始值 1<br/>
            纯组件第一个state 1<br/>
            纯组件第八个setState 1<br/>
            纯组件渲染<br/>
            纯组件第二个state 1<br/>
            纯组件渲染<br/>
            纯组件第三个state 1<br/>
            纯组件渲染<br/>
            纯组件第四个state 1<br/>
            纯组件第五个state 1<br/>
            纯组件渲染<br/>
            纯组件第六个state 1<br/>
            纯组件渲染<br/>
            纯组件第七个state 1<br/>
            </div>
        </div>
    )
}

