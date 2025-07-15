import styles from './ToggleButton.module.css';

const ToggleButton = () => {
  return (
    <div className={styles.toggle}>
      <input type='checkbox' />
      <label></label>
    </div>
  );
};

export default ToggleButton;
