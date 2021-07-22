import { useState } from 'react';
import Input from './Input';
import Label from './Label';

const Section = (props) => {
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);

    const validateBox1 = () => {
        let newState = box1 ? false : true;
        setBox1(newState);
        if (newState && box2 && box3) {
            setBox2(false);
        }
    };
    const validateBox2 = () => {
        let newState = box2 ? false : true;
        setBox2(newState);
        if (newState && box1 && box3) {
            setBox3(false);
        }
    };
    const validateBox3 = () => {
        let newState = box3 ? false : true;
        setBox3(newState);
        if (newState && box2 && box1) {
            setBox1(false);
        }
    };

    return (
        <section>
            <Input onClick={validateBox1} type="checkbox" id="fast" checked={box1} />
            <Label className="red" htmlFor="fast" name="fast" />

            <Input onClick={validateBox2} type="checkbox" id="good" checked={box2} />
            <Label className="green" htmlFor="good" name="good" />

            <Input onClick={validateBox3} type="checkbox" id="cheap" checked={box3} />
            <Label className="blue" htmlFor="cheap" name="cheap" />
        </section>
    );
};
export default Section;
