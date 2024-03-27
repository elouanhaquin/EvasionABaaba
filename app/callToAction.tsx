import styles from "./page.module.css";

export interface Ibutton{
    text : string,
    url : string
}

export default function callToAction(p_button : Ibutton) {
    return (
        <button className="mt-12 p-4 rounded-md bg-teal-500 text-white" >
                   {p_button.text}
        </button>

    );
}
