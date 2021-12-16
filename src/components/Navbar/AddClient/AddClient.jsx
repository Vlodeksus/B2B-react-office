import classes from './AddClient.module.css';

const AddClient = () => {
    return (
        <div className={classes.wrapper}>
            <span>Додати клієнта</span>
            <img className={classes.plusImg} src='data:image/png;base64,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'></img>
        </div>
    );
}

export default AddClient;