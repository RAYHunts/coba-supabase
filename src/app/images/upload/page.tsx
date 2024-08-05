import { upload } from './actions';

const listImagePage = async () => {
  return (
    <form>
      <input accept="image/*" type="file" name="image" />
      <button formAction={upload}>Upload</button>
    </form>
  );
};

export default listImagePage;
