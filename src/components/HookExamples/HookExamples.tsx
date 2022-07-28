import { Col, Row } from 'antd';
import React, { useMemo, useState } from 'react';
import { useEffect } from 'react';

const HookExamples: React.FC = () => {
    const [memoCount, setMemoCount] = useState(50);
    const [powerCount, setPowerCount] = useState(2);
    const [count, setCount] = useState(50);
    const [powerCount2, setPowerCount2] = useState(2);
    const [countSum, setCountSum] = useState(2);

    ////////////////////////////////////////
    const expensiveCount = useMemo(() => {
        return memoCount ** powerCount;
    }, [memoCount])
    ////////////////////////////////////////

    const expensiveCountv2 = () => {
        return count ** powerCount2;
    }

    useEffect(() => {
        setCountSum(expensiveCountv2)
    }, [count, powerCount2])

    return (
        <>
            <Row justify='space-evenly'>
                <Col>
                    <div>
                        <p>useMemo()</p>
                        <hr />

                        <p>Count: {memoCount}</p>
                        <p>Power Count: {powerCount}</p>

                        <p>Sum: {expensiveCount}</p>
                        <hr />

                        <button onClick={() => setMemoCount(memoCount + 1)}>Increase Count</button>
                        <button onClick={() => setMemoCount(memoCount - 1)}>Decrease Count</button>

                        <button onClick={() => setPowerCount(powerCount + 1)}>Increase Power</button>
                        <button onClick={() => setPowerCount(powerCount - 1)}>Decrease Power</button>

                    </div>
                </Col>
                <Col>
                    <div>
                        <p style={{ textDecoration: 'line-through' }}>useMemo()</p>
                        <hr />

                        <p>Count: {count}</p>
                        <p>Power Count: {powerCount2}</p>

                        <p>Sum: {countSum}</p>
                        <hr />

                        <button onClick={() => setCount(count + 1)}>Increase Count</button>
                        <button onClick={() => setCount(count - 1)}>Decrease Count</button>

                        <button onClick={() => setPowerCount2(powerCount2 + 1)}>Increase Power</button>
                        <button onClick={() => setPowerCount2(powerCount2 - 1)}>Decrease Power</button>

                    </div>
                </Col>
            </Row>
        </>
    )
}

export default HookExamples;