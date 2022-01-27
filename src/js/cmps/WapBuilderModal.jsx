import { Screen } from './Screen'
import { Loader } from '../cmps/Loader'


export function WapBuildingModal() {


    return (
        <Screen>
            <div className="save-loader-container">
                <Loader color={'#ffffff'} />
                <h1>Please wait a few moments...</h1>
            </div>
        </Screen>
    )
}