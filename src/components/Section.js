import { useState } from 'react';
import Input from './Input';
import Label from './Label';

const Section = (props) => {
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    console.log('initialement :', box1, box2, box3);

    const validateBox1 = () => {
        let newState = box1;
        if (newState) {
            newState = false;
        } else {
            newState = true;
        }

        setBox1(newState);
    };
    const validateBox2 = () => {
        let newState = box2;
        if (newState) {
            newState = false;
        } else {
            newState = true;
        }
        setBox2(newState);
    };
    const validateBox3 = () => {
        let newState = box3;
        if (newState === false) {
            newState = true;
        } else {
            newState = false;
        }
        setBox3(newState);
    };

    // const valueChekedOne = () => {
    if (validateBox1) {
        if (box1 && box2 && box3) {
            setBox2(false);
        }
    }
    if (validateBox2) {
        if (box1 && box2 && box3) {
            setBox1(false);
        }
    }
    if (validateBox3) {
        if (box1 && box2 && box3) {
            setBox2(false);
        }
    }

    console.log(box1, box2, box3);

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
