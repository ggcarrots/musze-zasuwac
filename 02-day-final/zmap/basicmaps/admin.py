from django.contrib import admin

from .models import Map

class MapAdmin(admin.ModelAdmin):
	list_display = ('__str__', 'title')

admin.site.register(Map, MapAdmin)
