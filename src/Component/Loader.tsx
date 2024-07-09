import { DotLoader } from "react-spinners";

const styles: object = {
    margin: "4.5rem auto",
};
function Loader() {

    return (
        <div className="sweet-loading">
            <DotLoader
                color='#4f68f7'
                cssOverride={styles}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
                speedMultiplier={1.3}
            />
        </div>
    );
}

export default Loader;