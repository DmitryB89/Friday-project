import React from 'react';
import SuperButton from "../components/SuperButton/SuperButton";
import SuperInputText from "../components/SuperInputText/SuperInputText";
import SuperCheckbox from "../components/SuperCheckbox/SuperCheckbox";

export const Test = () => {
    return (
        <>
            <SuperButton >Push me</SuperButton>
            <SuperInputText/>
            <button>submit</button>
            <SuperCheckbox/>
        </>
    );
};

