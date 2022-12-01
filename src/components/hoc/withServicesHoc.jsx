import {ServiceConsumer} from "../context";

export const WithServicesHoc = (mapMethodToProps)=> (Wrapper) => {
    return (props) => {
        return <ServiceConsumer>
            {
                (services) => {
                    const serviceProps = mapMethodToProps(services)
                    return <Wrapper {...props} {...serviceProps}/>
                }
            }
        </ServiceConsumer>
    }
}

