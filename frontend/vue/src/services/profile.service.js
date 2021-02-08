import ApiService from "@/services/api.service";
const ProfileService = {
  update(params) {
    console.log({user: params});
    return ApiService.put("user", {user: params});
  },
  get(params){
    console.log(params);
    return ApiService.put("profiles", params);
  }

};

export default ProfileService;
