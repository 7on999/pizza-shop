import React from "react"
import ContentLoader from "react-content-loader"

const LoaderPizzaBlock = (props) => (
  <ContentLoader 
    speed={2}
    width={350}
    height={500}
    viewBox="0 0 500 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="45" y="330" rx="3" ry="3" width="280" height="84" /> 
    <rect x="42" y="283" rx="3" ry="3" width="280" height="24" /> 
    <circle cx="177" cy="135" r="130" /> 
    <rect x="52" y="445" rx="0" ry="0" width="90" height="27" /> 
    <rect x="178" y="432" rx="35" ry="35" width="151" height="44" />
  </ContentLoader>
)

export default LoaderPizzaBlock