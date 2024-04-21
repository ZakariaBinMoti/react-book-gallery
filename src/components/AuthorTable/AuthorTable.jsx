import PropTypes from "prop-types";

const AuthorTable = ({ book }) => {
  const { bookName, author, category,publisher } = book;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src="/avatar.svg" alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{author}</div>
          </div>
        </div>
      </td>
      <td>
        {bookName}
        <br />
        <span className="badge badge-ghost badge-sm">
          {publisher}
        </span>
      </td>
      <td>{category}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

AuthorTable.propTypes = {
  book: PropTypes.object,
};

export default AuthorTable;
