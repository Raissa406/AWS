import Inscription from "./Inscription"
import Invitations from "./Invitations"
import Onboarding from "./Onboarding"
import Verification from "./Verification"

export interface Iactive {
    active:number
}

function Index({ active}: Iactive){
    if(active === 0){
        return(
            <Inscription/>
        )
    }
    if(active === 1){
        return(
            <Verification/>
        )
    }
    if(active === 2){
        return(
            <Invitations/>
        )
    }
    if(active === 3){
        return(
            <Onboarding/>
        )
    }
}

export default Index