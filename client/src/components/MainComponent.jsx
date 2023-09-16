import BestPricePlaceHolderComponent from "./BestPricePlaceholderComponent";
import DynamicDataComponent from "./DynamicDataComponent";

export default function MainComponent() {
  return (
    <div className="flex flex-col align-middle text-center">
      <h1 className="text-3xl text-gray-400 font-light">Best Price to Trade</h1>
      <div>
        <BestPricePlaceHolderComponent />
      </div>
      <div className="text text-gray-400 font-light my-2">
        Average BTC/INR net price including commission
      </div>
      <DynamicDataComponent />
    </div>
  );
}
