from django.contrib import admin

from .models import Feedback

class FeedbackAdmin(admin.ModelAdmin):
	list_display = ['__str__']

admin.site.register(Feedback, FeedbackAdmin)
