export interface Ibutton{
    text : string,
    url : string,
    color : string
}

export default function callToAction(p_button : Ibutton) {
    function goToUrl(){
       window.location.replace("#Contact")
    }

    return (
        <button className={"mt-12 p-4 rounded-md  text-white " + p_button.color} onClick={() => goToUrl()}>
                   {p_button.text}
        </button>

    );
}
