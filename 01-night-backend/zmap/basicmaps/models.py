from django.db import models

class Map(models.Model):
	map_type = models.CharField(max_length=32)
	category = models.CharField(max_length=32)
	title = models.CharField(max_length=64)
	desc = models.CharField(max_length=256, blank=True)
	address = models.CharField(max_length=64, blank=True)
	lat = models.FloatField()
	lng = models.FloatField()

	def as_json(self):
		return dict(
			lat=self.lat, lng=self.lng,
			address=self.address, title=self.title,
			desc=self.desc, category=self.category )

	def __str__(self):
		return self.title + " (" + self.address + ")"
