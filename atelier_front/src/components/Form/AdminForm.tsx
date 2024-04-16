
import css from './AdminForm.module.css';

const AdminForm = () => {
 
  return (
    <div className={css['log-in-form-wrapper']}>
      <form
        className={css['log-in-form']}
        autoComplete="off"
       
      >
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> name </span>
          <input className={css['log-in-input']} type="text" name="name" />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> category </span>
          <input
            className={css['log-in-input']}
            type="text"
            name="category"
          />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> brand</span>
          <input
            className={css['log-in-input']}
            type="text"
            name="brand"
          />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> price </span>
          <input
            className={css['log-in-input']}
            type="text"
            name="price"
          />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> content </span>
          <input
            className={css['log-in-input']}
            type="text"
            name="content"
          />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> stock </span>
          <input
            className={css['log-in-input']}
            type="text"
            name="stock "
          />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> online </span>
          <input
            className={css['log-in-input']}
            type="text"
            name="online"
          />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> avis </span>
          <input
            className={css['log-in-input']}
            type="text"
            name="avis"
          />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> picture </span>
          <input
            className={css['log-in-input']}
            type="image"
            name="image"
          />
        </label>
        <button className={css['log-in-btn']} type="submit">
         ok
        </button>
      </form>
    </div>
  );
};

export default AdminForm;