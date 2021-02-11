import ApiService from "@/services/api.service";
const ProfileService = {
  update(params) {
    return ApiService.put("user", { user: params });
  },
  get(params) {
    return ApiService.get("profiles", params);
  },
  follow(username) {
    return ApiService.post(`profiles/${username}/follow`);
  },
  unfollow(username) {
    return ApiService.delete(`profiles/${username}/follow`);
  },
};

export default ProfileService;
