import { createContext, useState, useEffect } from "react";
import featureFlagsDataServingCall from "../data";

export const FeatureFlagsContext = createContext(null)

const FeatureFlagGlobalState = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    const fetchFeatureFlags = async () => {
        try {
            setLoading(true)
            const response = await featureFlagsDataServingCall()
            setEnabledFlags(response)
            setLoading(false)

        } catch (error) {
            setLoading(false)
            throw new Error(error)

        }
    }


    useEffect(() => {
        fetchFeatureFlags()
    }, [])

    return (
        <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
            {children}
        </FeatureFlagsContext.Provider>)

}

export default FeatureFlagGlobalState 