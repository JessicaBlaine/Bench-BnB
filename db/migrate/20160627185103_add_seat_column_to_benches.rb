class AddSeatColumnToBenches < ActiveRecord::Migration
  def change
    add_column :benches, :number_of_seats, :integer
  end
end
