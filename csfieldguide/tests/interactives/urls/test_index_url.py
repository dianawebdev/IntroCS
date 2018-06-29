from tests.BaseTestWithDB import BaseTestWithDB
from django.urls import reverse


class IndexURLTest(BaseTestWithDB):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.language = "en"

    def test_interactives_valid_index_url(self):
        url = reverse("interactives:index")
        self.assertEqual(url, "/en/interactives/")
