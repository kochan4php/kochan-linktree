/**
 * © Copyright by Deo Subarno (Kochan.php | kochan4php)
 * Don't edit this code!
 */

const Profile = () => (
  <div className="flex flex-col items-center gap-3">
    <div className="avatar">
      <div className="w-[124px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img
          src="https://avatars.githubusercontent.com/kochan4php"
          alt="avatar"
          className="object-cover object-center"
        />
      </div>
    </div>
    <h1 className="text-3xl font-bold text-center mt-2">Deo Subarno</h1>
    <p className="text-lg font-medium text-center">Laravel Backend Developer</p>
  </div>
);

export default Profile;
