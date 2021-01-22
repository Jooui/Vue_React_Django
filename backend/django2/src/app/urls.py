from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from modules.users.api.viewsets import UserViewSet, UserViewSetAdmin


router = routers.DefaultRouter()
router.register(r'users_Admin', UserViewSetAdmin) 
router.register(r'users', UserViewSet)


# urlpatterns = [
#     path('', include(router.urls)),
#     path('admin/', admin.site.urls),
#     path('api-auth/', include('rest_framework.urls')),
# ]
urlpatterns = [
    url(r'^admin/', admin.site.urls),

    url(r'^api/', include('app.modules.address.urls', namespace='adress')),
    url(r'^api/', include('app.modules.authentication.urls', namespace='authentication')),
    url(r'^api/', include('app.modules.profiles.urls', namespace='profiles')),
]
