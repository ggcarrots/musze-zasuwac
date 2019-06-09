from django.db import models

class Feedback(models.Model):
	content = models.TextField();

	def __str__(self):
		return str(self.id)
