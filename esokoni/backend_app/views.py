from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from .models import Billing
from .serializers import BillingSerializer
from rest_framework.decorators import api_view

# Create your views here.

@api_view(['GET', 'POST'])
def billing_list(request):
    if request.method == 'GET':
        billing = Billing.objects.all()
        
        name = request.GET.get('name', None)
        if name is not None:
            billing = billing.filter(name__icontains=name)
        billing_serializer = BillingSerializer(billing, many=True)
        return JsonResponse(billing_serializer.data, safe=False)
    elif request.method == 'POST':
        billing_data = JSONParser().parse(request)
        billing_serializer = BillingSerializer(data=billing_data)
        if billing_serializer.is_valid():
            billing_serializer.save()
            return JsonResponse(billing_serializer.data, status=status.HTTP_201_CREATED)
