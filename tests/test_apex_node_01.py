"""Tests for apex_node_01 package."""

from apex_node_01 import greet


def test_greet_returns_hello_world():
    assert greet("World") == "Hello, World!"


def test_greet_returns_custom_name():
    assert greet("Alice") == "Hello, Alice!"


def test_greet_returns_string():
    result = greet("Test")
    assert isinstance(result, str)
