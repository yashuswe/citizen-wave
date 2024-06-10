import React, { FC, ReactNode } from "react";
import Swipe, { SwipeProps } from "react-easy-swipe";

interface CustomSwipeProps extends SwipeProps {
    children: ReactNode;
}

const CustomSwipe: FC<CustomSwipeProps> = ({ children, ...props }) => {
    return (
        <Swipe {...props}>
            {children}
        </Swipe>
    );
};

export default CustomSwipe;
