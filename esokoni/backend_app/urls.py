from django.urls import re_path
from. import views

urlpatterns = [
    re_path(r'^api/billing$', views.billing_list)
]
