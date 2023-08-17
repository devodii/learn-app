import * as bcrypt from 'bcryptjs';

/**
 * Hashes a given password using bcrypt.
 * @param {string} plainPassword - The plain password to be hashed.
 * @returns {Promise<string>} - A Promise resolving to the hashed password.
 */
export async function hashPassword(plainPassword: string): Promise<string> {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(plainPassword, salt);
  return hashedPassword;
}

/**
 * Compare a provided plain text password with a hashed password.
 * @param {string} plainPassword - The plain text password entered by the user.
 * @param {string} hashedPassword - The hashed password stored in the database.
 * @returns {Promise<boolean>} - Resolves to true if the passwords match, otherwise false.
 */
export async function compareHashedPasswords(
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> {
  return bcrypt.compareSync(plainPassword, hashedPassword);
}
