from rest_framework import viewsets,generics,mixins


from .serializers import EmployeeSerializer
from .models import Employee

# from .utils import MultipleFieldLookupMixin

# Permiteix sols List i Create
class EmployeeViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.CreateModelMixin, mixins.RetrieveModelMixin):
    queryset = Employee.objects.all().order_by('name')
    serializer_class = EmployeeSerializer
    # lookup_field = 'slug'
    def retrieve(self,request, *args, **kwargs):
        self.lookup_field = 'pk' if isinstance(request.parser_context.get('kwargs').get('pk', 0), int) else 'name'
        return super(EmployeeViewSet, self).retrieve(request, *args, **kwargs)

    # lookup_fields = ('pk', 'name')

    # lookup_field = 'name'
    


# Permiteix tots els metodos (Create List Retrieve Detele Update) per ModelViewSet
# class EmployeeViewSet(viewsets.ModelViewSet):
#     queryset = Employee.objects.all().order_by('name')
#     serializer_class = EmployeeSerializer