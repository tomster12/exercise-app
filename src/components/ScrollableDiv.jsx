import { useEffect, useRef } from "react";
import "./ScrollableDiv.css";

function ScrollableDiv(props) {
    const contentRef = useRef(null);

    useEffect(() => {
        const content = contentRef.current;
        const bar = content.parentElement.querySelector("._bar");
        const thumb = bar.querySelector("._thumb");

        const updateThumb = () => {
            thumb.style.height = `${(content.clientHeight / content.scrollHeight) * 100}%`;
            thumb.style.top = `${(content.scrollTop / content.scrollHeight) * 100}%`;
        };

        content.addEventListener("scroll", updateThumb);
        window.addEventListener("resize", updateThumb);
        updateThumb();

        thumb.addEventListener("mousedown", (e) => {
            e.preventDefault();
            const startY = e.clientY;
            const startTop = parseInt(thumb.style.top);

            const mousemove = (e) => {
                const diffY = e.clientY - startY;
                const newTop = Math.min(100, Math.max(0, startTop + (diffY / bar.clientHeight) * 100));
                content.scrollTop = (newTop / 100) * content.scrollHeight;
            };

            const mouseup = () => {
                window.removeEventListener("mousemove", mousemove);
                window.removeEventListener("mouseup", mouseup);
            };

            window.addEventListener("mousemove", mousemove);
            window.addEventListener("mouseup", mouseup);
        });
    }, []);

    return (
        <div className="scrollable-div">
            <div className="_content" ref={contentRef}>
                {props.children}
            </div>
            <div className="_bar">
                <div className="_thumb"></div>
            </div>
        </div>
    );
}

export default ScrollableDiv;
