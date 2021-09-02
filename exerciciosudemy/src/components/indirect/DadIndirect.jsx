import SonIndirect from "./SonIndirect";

export default function DadIndirect () {

    function talkTome(paramA, paramB, paramC) {
        console.log(paramA, paramB, paramC)
    }

    return (
        <div>
            <SonIndirect callFunction={talkTome} />
        </div>
    )
}