from rest_framework import serializers
from .models import Billing

class BillingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Billing
        fields = (
            'id',
            'name',
            'email',
            'phone',
            'address'
        )
