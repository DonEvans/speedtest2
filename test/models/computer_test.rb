require 'test_helper'

class ComputerTest < ActiveSupport::TestCase

  def setup
    @computer = Computer.new(userName: "Example User", category: "PC", 
              browser: "Firefox", userAgentString: "Mozilla", 
              description: "Fast computer", time: 100 )

  end

  test "should be valid" do
    assert @computer.valid?
  end

  test "userName should be present" do
    @computer.userName = "     "
    assert_not @computer.valid?
  end

  test "category should be present" do
    @computer.category = "     "
    assert_not @computer.valid?
  end

  test "browser should be present" do
    @computer.browser = "     "
    assert_not @computer.valid?
  end

  test "userAgentString should be present" do
    @computer.userAgentString = "     "
    assert_not @computer.valid?
  end

  test "time should be present" do
    @computer.time = nil
    assert_not @computer.valid?
  end

  test "userName should not be too long" do
    @computer.userName = "a" * 61
    assert_not @computer.valid?
  end

  test "category should not be too long" do
    @computer.category = "a" * 61
    assert_not @computer.valid?
  end

  test "browser should not be too long" do
    @computer.browser = "a" * 61
    assert_not @computer.valid?
  end

  test "description should not be too long" do
    @computer.description = "a" * 127
    assert_not @computer.valid?
  end

  test "userAgentString should not be too long" do
    @computer.userAgentString = "a" * 256
    assert_not @computer.valid?
  end

  test "time should be numeric" do
    @computer.time = "aaa"
    assert_not @computer.valid?
  end
end

