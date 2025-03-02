export const logout = async (req, res) => {
  try {
    res.clearCookie("PassportTest");
    res.clearCookie("connect.sid");
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
