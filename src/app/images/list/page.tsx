const listImagePage = () => {
  return (
    <form>
      <input accept="image/*" type="file" name="image" />
      <button type="submit">Upload</button>
    </form>
  );
};

export default listImagePage;
