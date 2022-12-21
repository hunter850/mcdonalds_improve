import { Global, css } from "@emotion/react";

function GlobalStyles() {
    return (
        <Global
            styles={css`
                * {
                    box-sizing: border-box;
                    padding: 0px;
                    margin: 0px;
                    list-style-type: none;
                    font-family: Arial, Helvetica, sans-serif;
                }

                svg:focus,
                button:focus {
                    outline: none;
                }

                input,
                label,
                textarea,
                button,
                select,
                a {
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                }
            `}
        />
    );
}

export default GlobalStyles;
