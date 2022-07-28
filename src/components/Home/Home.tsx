import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "antd";
import movieDataFile from '../../stores/movieNames.json';
import Search from "antd/lib/input/Search";
import './Home.css';

const columns = [
    {
        name: 'name',
        dataIndex: 'name',
        key: 'name',
    }
]

const Home: React.FC = () => {
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

    useEffect(() => {
        setMovieData();
    }, []);

    useEffect(() => {
        if (searchQuery.length > 0) {
            const matches = listData.filter((x) => x.name.toLowerCase().includes(searchQuery.toLowerCase()))

            setListData(matches);
        } else {
            setMovieData();
        }
    }, [searchQuery]);

    {
        return <>
            <Row>
                <Col span={16} offset={4}>
                    <Row justify="end">
                        <Col span={8}>
                            <Search className="search-field" placeholder="Type to search in the list" onChange={(input) => setSearchQuery(input.currentTarget.value)} />
                        </Col>
                    </Row>

                    <Table dataSource={listData} columns={columns} />
                </Col>
            </Row>

        </>
    }
}

export default Home;