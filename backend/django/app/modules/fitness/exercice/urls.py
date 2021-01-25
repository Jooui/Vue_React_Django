from django.conf.urls import include, url

from rest_framework.routers import DefaultRouter

from .views import ExerciceViewSet
app_name = 'exercice'

router = DefaultRouter(trailing_slash=False)
router.register(r'exercice', ExerciceViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),

]
