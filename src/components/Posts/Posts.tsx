import { Table } from "antd";
import Search from "antd/lib/input/Search";
import React, { useEffect, useState } from "react";
import movieDataFile from '../../stores/movieNames.json';

const columns = [
    {
        name: 'name',
        dataIndex: 'name',
        key: 'name',
    }
]

const Posts: React.FC = () => {
    // DEMO
    const [listData, setListData] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    function setMovieData() {
        const data = movieDataFile.map((m: any, index: number) => {
            return {
                name: m.name,
                dataIndex: index,
                key: index
            }
        });

        setListData(data);
    }

    // didMount
    useEffect(() => {
        setMovieData();
    }, []);

    // 
    useEffect(() => {
        if(searchQuery.length > 0) {
            console.log('asdasd');
            
            const matches = listData.filter((x) => x.name.toLowerCase().includes(searchQuery.toLowerCase()))
            
            setListData(matches);
        } else {
            setMovieData();
        }
    }, [searchQuery]);

    {
        return <>
            <Search placeholder="input search loading default"  onChange={(input) => setSearchQuery(input.currentTarget.value)}/>

            <Table dataSource={listData} columns={columns} />
        </>
    }
}

export default Posts;