from rest_framework import routers
from .api import NoteViewSet

router = routers.DefaultRouter()
router.register('api/notes', NoteViewSet, 'notes')

urlpatterns = router.urls
