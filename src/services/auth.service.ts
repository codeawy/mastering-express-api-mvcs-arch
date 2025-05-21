const authService = {
  register: async ({ email }: { email: string; password: string }) => {
    return {
      email,
    };
  },
};

export default authService;
