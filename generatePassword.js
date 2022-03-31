// Import dependencies
import bcrypt from 'bcrypt';



(async () => {
    // Hash the password
    const salt = await bcrypt.genSalt(15);
    console.log(await bcrypt.hash("123", salt));
    console.log(await bcrypt.compare('123','$2b$15$RmZbQxd35CKvHEPuWGa1Huu0G6kY2ffUNwCIWOuSqY8.GPX3M0N2K'));
    
})();
