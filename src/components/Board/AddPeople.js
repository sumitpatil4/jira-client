import './AddPeople.css';
const AddPeople = () => {

    return ( 
        <div className="add-people">
            <div className="form-name">
                <h3>Add people</h3>
            </div>
            <form >
                <label>Name, email or group  </label>
                <input 
                    type="text"
                    name="username"
                    placeholder='eg:Vaishnavi; kammara.vaishnavi@accolitedigital.com'
                    />
                <label> Role </label>
                <select>
                        <option value="">Please select role</option>
                        <option value="administrator">Administrator</option>
                        <option value="developers">Developers</option>
                        <option value="users">Users</option>
                    </select>
                <div className="button">
                    <button>Add</button>
                    <button>Cancel</button>
                </div>
            </form>
        </div>
     );
}
 
export default AddPeople;