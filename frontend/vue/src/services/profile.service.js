import ApiService from "@/services/api.service";
const ProfileService = {
  update(params) {
    console.log({user: params});
    return ApiService.put("user", {user: params});
  },

};

export default ProfileService;
