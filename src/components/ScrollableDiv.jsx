import { useEffect, useRef } from "react";
import "./ScrollableDiv.css";

function ScrollableDiv(props) {
    const content = useRef(null);

    useEffect(() => {
        const _content = content.current;
        const _bar = _content.parentElement.querySelector("._bar");
        const _thumb = _bar.querySelector("._thumb");

        const updateThumb = () => {
            _thumb.style.height = `${(_content.clientHeight / _content.scrollHeight) * 100}%`;
            _thumb.style.top = `${(_content.scrollTop / _content.scrollHeight) * 100}%`;
        };

        _content.addEventListener("scroll", updateThumb);
        window.addEventListener("resize", updateThumb);
        updateThumb();

        _thumb.addEventListener("mousedown", (e) => {
            e.preventDefault();
            const startY = e.clientY;
            const startTop = parseInt(_thumb.style.top);

            const mousemove = (e) => {
                const diffY = e.clientY - startY;
                const newTop = Math.min(100, Math.max(0, startTop + (diffY / _bar.clientHeight) * 100));
                _content.scrollTop = (newTop / 100) * _content.scrollHeight;
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
            <div className="_content" ref={content}>
                {props.children}
            </div>
            <div className="_bar">
                <div className="_thumb"></div>
            </div>
        </div>
    );
}

export default ScrollableDiv;
