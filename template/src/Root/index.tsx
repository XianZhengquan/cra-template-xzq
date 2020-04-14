/**
 * 根组件
 * @author XianZhengquan
 * @create 2020/4/14
 */
import React from 'react';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'dayjs/locale/zh-cn';

const Root: React.FC = () => {

    return (
        <ConfigProvider locale={zhCN}>

        </ConfigProvider>
    );
};

export default Root;
